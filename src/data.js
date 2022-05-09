/*

        brand: "",
        price: "",
        name: "",
        storage: "",
        id: "",

*/
//images
import iPhone12ProMax from "./img/phones/apple/Apple-iPhone-12-Pro-Max.png";
import iPhone12 from "./img/phones/apple/Apple-iPhone-12.png";
import iPhone13 from "./img/phones/apple/Apple-iPhone-13-Pro.png";

//import galaxyZFlip3 from "/img/phones/samsung/Galaxy-Z-Flip3.png";
import galaxyA13 from "./img/phones/samsung/Samsung-Galaxy-A13.png";
import galaxyA53 from "./img/phones/samsung/Samsung-Galaxy-A53.png";
import galaxyS22plus from "./img/phones/samsung/Samsung-Galaxy-S22-Plus.png";
import galaxyS22 from "./img/phones/samsung/Samsung-Galaxy-S22.png";

import pixel6pro from "./img/phones/google/Google-Pixel-6-Pro.png";
import pixel6 from "./img/phones/google/Google-Pixel-6.png";

const PHONES = [
    {
        brand: "apple",
        price: 1299.99,
        name: "iPhone 12 Pro Max",
        storage: "128 GB",
        image: iPhone12ProMax,
    },
    {
        brand: "apple",
        price: 1099.99,
        name: "iPhone 12",
        storage: "64 GB",
        image: iPhone12,
    },
    {
        brand: "apple",
        price: 1399.99,
        name: "iPhone 13 Pro",
        storage: "256 GB",
        image: iPhone13,
    },
    // {
    //     brand: "samsung",
    //     price: 1499.99,
    //     name: "Galaxy Z Flip3",
    //     storage: "256 GB",
    //     image: galaxyZFlip3,
    // },
    {
        brand: "samsung",
        price: 499.99,
        name: "Galaxy A13",
        storage: "32 GB",
        image: galaxyA13,
    },
    {
        brand: "samsung",
        price: 699.99,
        name: "Galaxy A53",
        storage: "64 GB",
        image: galaxyA53,
    },
    {
        brand: "samsung",
        price: 849.99,
        name: "Galaxy S22 Plus",
        storage: "512 GB",
        image: galaxyS22plus,
    },
    {
        brand: "samsung",
        price: 849.99,
        name: "Galaxy S22",
        storage: "256 GB",
        image: galaxyS22,
    },
    {
        brand: "google",
        price: 699.99,
        name: "Pixel 6 Pro",
        storage: "128 GB",
        image: pixel6pro,
    },
    {
        brand: "google",
        price: 549.99,
        name: "Pixel 6 Pro",
        storage: "64 GB",
        image: pixel6,
    },
];

function getAllPhones() {
    return PHONES;
}

function getPhoneByBrand(brandName) {
    return PHONES.filter((phone) => phone.brand === brandName);
}

export { getAllPhones, getPhoneByBrand };
