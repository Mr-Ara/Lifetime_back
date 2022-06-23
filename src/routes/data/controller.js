const controller = require('../controller')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
module.exports = new ( class extends controller{

  async vip(req,res){
    
    res.json({
      message:'ok',
      data:{
        'price': 270,
        'time' : 1,
        'description': " یک ماه مفید ، حداقل ۵۰ سیگنال",
        'market': 'Spot & Futures'
      }
    })
  }

  async binance(req,res){

    res.json({
      message:'ok',
      data:{
        'price': 300,
        'time' : 2,
        'description': "احراز هویت تا سطح ۳ در صرافی بایننس",
        
      }
    })
  }

  async recovery(req,res){

    res.json({
      message:'ok',
      data:{
        'price': '30%',
        'time' : 2,
        'description': "برگرداندن دارایی گیر کرده در شبکه به واسطه انتخاب شبکه اشتباه",
        'require':'فقط برای آدرس های مقصدی که برای ولت شخصی باشند امکان بازیابی وجود دارد'
        
      }
    })
  }
})