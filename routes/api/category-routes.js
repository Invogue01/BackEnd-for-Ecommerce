const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  });
  try {
    const categoryData =await Category.findAll();
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  });
  try {
    const categoryData =await Category.findOne();
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  Category.create({
    category_name:req.body.category_name
  })
  try {
    const categoryData =await Category.create();
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
    
  })
  try {
    const categoryData = await Category.update();
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  Category.destroy({
where:{
  id:req.params.id
}
  })
  try {
    const categoryData = await Category.destroy();
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

module.exports = router;
