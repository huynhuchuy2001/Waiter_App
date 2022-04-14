const Users = require('../models/userModels')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const userCtrl = {
    // register
    register: async (req, res) =>{
        try {
            if(req.body.firstname === ''){
                res.status(400).json({
                    msg: 'Firstname không được để trống'
                })
            }
            else if(req.body.lastname === ''){
                res.status(400).json({
                    msg: 'Lastname không được để trống'
                })
            }
            else if(req.body.username === ''){
                res.status(400).json({
                    msg: 'Username không được để trống'
                })
            }
            else if(req.body.password === ''){
                res.status(400).json({
                    msg: 'Password không được để trống'
                })
            }
            else if(req.body.password.length < 6){
                res.status(400).json({
                    msg: 'Password phải có ít nhất 6 ký tự'
                })
            }
            else if(req.body.confirmpassword === ''){
                res.status(400).json({
                    msg: 'ComfirmPassword không được để trống'
                })
            }
            else if(req.body.confirmpassword.length < 6){
                res.status(400).json({
                    msg: 'Password phải có ít nhất 6 ký tự'
                })
            }
            else if(req.body.password !== req.body.confirmpassword){
                return res.status(400).json({
                    msg: 'Password and Confirm Password not match'
                })
            }
            else if(req.body.email === ''){
                res.status(400).json({
                    msg: 'Email không được để trống'
                })
            }
            else if(req.body.phonenumber === ''){
                res.status(400).json({
                    msg: 'Phonenumber không được để trống'
                })
            }
            else if(req.body.address === ''){
                res.status(400).json({
                    msg: 'Address không được để trống'
                })
            }
            else if(req.body.nationality === ''){
                res.status(400).json({
                    msg: 'Nationality không được để trống'
                })
            }
            const user = await Users.findOne({email : {$eq : req.body.email}})
            // check email
            if(user) return res.status(400).json({msg: "Email này đã tồn tại."})
            // Password Encryption
            const passwordHash = await bcrypt.hash(req.body.password, 10)
            const newUser = new Users({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                username : req.body.username,
                email : req.body.email,
                password: passwordHash,
                address : req.body.address,
                nationality : req.body.nationality,
                phonenumber : req.body.phonenumber
            })

            // Save mongodb
            await newUser.save()
            return res.status(200).json({msg : "Đăng ký tài khoản thành công"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // login
    login: async (req, res) =>{
        try {
            if(req.body.email === ''){
                return res.status(400).json({msg: "Email đăng nhập không được để trống."})
            };
            if(req.body.password === ''){
                return res.status(400).json({msg: "Password không được để trống."})
            };
            const { password} = req.body;
            

            const user = await Users.findOne({email : {$eq : req.body.email}})
            // check user
            if(!user) return res.status(400).json({msg: "Tài khoản không tồn tại."})

            const isMatch = await bcrypt.compare(password, user.password)
            // check password
            if(!isMatch) return res.status(400).json({msg: "Sai tài khoản hoặc mật khẩu. Xin vui lòng đăng nhập lại!"})
            return res.status(200).json("Đăng nhập thành công!");

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },


 }


module.exports = userCtrl