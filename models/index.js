// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Model } = require('sequelize/types');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
