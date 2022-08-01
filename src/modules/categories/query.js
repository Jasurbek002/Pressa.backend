
const GETSELECT = `
select 
c.*,
json_agg(s.*) as subcategory
from  caregories as c
left join subcategories as s on s.category_id = c.category_id
group by c.category_id
`

const POSTSELECT = `
insert into caregories(category_name) values ($1) returning *
`

const PUTSELECT = `
update caregories set category_name = $1 where category_id = $2 returning *
`
 

module.exports = {
    GETSELECT , POSTSELECT ,PUTSELECT
}