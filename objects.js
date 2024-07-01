const user=[{
    yname:"ans",
    gen:"female"
},{
yname: "abh",
gen:"male"
},{
    yname:"aish",
    gen:"female"
}
]

for(let i=0;i<user.length;i++){
    if(user[i]["gen"]=="male"){
        console.log(user[i]["yname"]);
    }
}
