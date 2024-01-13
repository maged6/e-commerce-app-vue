import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
    lapTops: [],
    mobilePhone: [],
    homeDecoration: [],
    skincare: [],
    fragrances: [],
    ProductsCategory:[],
    item:[],
    singleProducts: [
      {
        title: "Laptops",
        routs: "laptops",
      },
      {
        title: "Smart Phones",
        routs: "smartphones",
      },
      {
        title: "Fragrances",
        routs: "fragrances",
      },
      {
        title: "Skincare",
        routs: "skincare",
      },
      {
        title: "Home Decoration",
        routs: "home-decoration",
      },
      {
        title: "Womens Dresses",
        routs: "womens-dresses",
      },
      {
        title: "Mens Shirts",
        routs: "mens-shirts",
      },
      {
        title:  "Mens Watches",
        routs:  "mens-watches",
      }
    ],
  }),
  getters: {},
  mutations: {},
  actions: {
    async getProducts() {
      await axios.get("https://dummyjson.com/products").then((res) => {
        this.skincare = res.data.products.filter(
          (ca) => ca.category === "skincare"
        );
        this.fragrances = res.data.products.filter(
          (ca) => ca.category === "fragrances"
        );
        this.homeDecoration = res.data.products.filter(
          (ca) => ca.category === "home-decoration"
        );
        this.mobilePhone = res.data.products.filter(
          (ca) => ca.category === "smartphones"
        );
        this.lapTops = res.data.products.filter(
          (ca) => ca.category === "laptops"
        );
        this.products = res.data.products.slice(0, 8);
      });
    },
    async getProductsByCategory(category){
      await axios.get(`https://dummyjson.com/products/category/${category}`).then( res =>{
        this.ProductsCategory = res.data.products
      })
    },
    async getProductById(ProductId){
      await axios.get(`https://dummyjson.com/products/${ProductId}`).then( res =>{
        this.item = res.data
      })
    },
  },
  modules: {},
});
