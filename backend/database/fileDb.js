import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileDatabase {
  constructor() {
    this.dbPath = path.join(__dirname, 'data');
    this.collections = {
      users: 'users.json',
      universities: 'universities.json',
      courses: 'courses.json',
      applications: 'applications.json'
    };
    this.init();
  }

  async init() {
    try {
      await fs.mkdir(this.dbPath, { recursive: true });
      
      // Initialize empty collections if they don't exist
      for (const [collection, filename] of Object.entries(this.collections)) {
        const filePath = path.join(this.dbPath, filename);
        try {
          await fs.access(filePath);
        } catch {
          await fs.writeFile(filePath, JSON.stringify([], null, 2));
        }
      }
    } catch (error) {
      console.error('Error initializing file database:', error);
    }
  }

  async readCollection(collection) {
    try {
      const filePath = path.join(this.dbPath, this.collections[collection]);
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading collection ${collection}:`, error);
      return [];
    }
  }

  async writeCollection(collection, data) {
    try {
      const filePath = path.join(this.dbPath, this.collections[collection]);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error(`Error writing collection ${collection}:`, error);
      return false;
    }
  }

  generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // CRUD operations
  async find(collection, filter = {}) {
    const data = await this.readCollection(collection);
    if (Object.keys(filter).length === 0) return data;
    
    return data.filter(item => {
      return Object.entries(filter).every(([key, value]) => {
        if (key === '_id' || key === 'id') {
          return item._id === value || item.id === value;
        }
        return item[key] === value;
      });
    });
  }

  async findOne(collection, filter) {
    const results = await this.find(collection, filter);
    return results[0] || null;
  }

  async findById(collection, id) {
    return await this.findOne(collection, { _id: id });
  }

  async create(collection, data) {
    const items = await this.readCollection(collection);
    const newItem = {
      _id: this.generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    items.push(newItem);
    await this.writeCollection(collection, items);
    return newItem;
  }

  async updateById(collection, id, updateData) {
    const items = await this.readCollection(collection);
    const index = items.findIndex(item => item._id === id);
    
    if (index === -1) return null;
    
    items[index] = {
      ...items[index],
      ...updateData,
      updatedAt: new Date()
    };
    
    await this.writeCollection(collection, items);
    return items[index];
  }

  async deleteById(collection, id) {
    const items = await this.readCollection(collection);
    const index = items.findIndex(item => item._id === id);
    
    if (index === -1) return null;
    
    const deletedItem = items[index];
    items.splice(index, 1);
    await this.writeCollection(collection, items);
    return deletedItem;
  }

  async count(collection, filter = {}) {
    const results = await this.find(collection, filter);
    return results.length;
  }

  // Pagination helper
  async paginate(collection, filter = {}, options = {}) {
    const { page = 1, limit = 10, sort = {} } = options;
    const skip = (page - 1) * limit;
    
    let results = await this.find(collection, filter);
    
    // Simple sorting
    if (Object.keys(sort).length > 0) {
      const [sortField, sortOrder] = Object.entries(sort)[0];
      results.sort((a, b) => {
        if (sortOrder === 1) {
          return a[sortField] > b[sortField] ? 1 : -1;
        } else {
          return a[sortField] < b[sortField] ? 1 : -1;
        }
      });
    }
    
    const total = results.length;
    const paginatedResults = results.slice(skip, skip + limit);
    
    return {
      data: paginatedResults,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    };
  }
}

export default new FileDatabase();
