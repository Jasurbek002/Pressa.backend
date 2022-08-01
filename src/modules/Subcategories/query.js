

const GETSELECT = `
select 
s.*,
json_agg(c.*) as cards
from subcategories as s
left join cards as c on c.sub_id = s.sub_id
group by s.sub_id
`
const POSTSELECT = `
insert into subcategories(sub_name,category_id) values($1,$2) returning *
`

const PUTSELECT = `
update subcategories set sub_name = $1, category_id = $2 where sub_id = $3 returning *
`
module.exports ={
    GETSELECT , POSTSELECT ,PUTSELECT
}