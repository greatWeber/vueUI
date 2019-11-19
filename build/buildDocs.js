
const {exec} = require('child_process');
const copyDir = require('copy-dir');
const fs = require('fs');
const path = require('path');
const rm = require('rimraf')

const srcPath = path.join(__dirname,'../docs/.vuepress/dist');
const targetPath = path.join(__dirname,'../dist/docs');

exec("npm run docs:build",{},(err, stdout, stderr)=>{
    if(err){
        return;
    }
    copyDir(srcPath,targetPath,(err)=>{
        if(err){
            console.log(err)
        }else{
            rm(srcPath,(err)=>{
                console.log(err)
            })
        }
    })
})