

const POSTSELECT =`
select 
a.admin_id as adminId,
a.adminname,
a.avatar,
a.status
 from admins as a where adminname = $1 and password = crypt($2, a.password)
`

module.exports = {
    POSTSELECT
}