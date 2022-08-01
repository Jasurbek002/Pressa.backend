const LOGINSELECT = `
select u.user_id from users as u where 
username = $1 and password = crypt($2, u.password)  
`
const REGISTERSELECT = `
insert into users(username,password,gender) values ($1,crypt($2,gen_salt('bf')),$3) returning *;
`


module.exports = {
    LOGINSELECT ,REGISTERSELECT
}