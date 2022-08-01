

const GETSELECT = `
select * from cards
where status = 'active'
`

const PENDINGGET = `
select * from cards
where status = 'pending'
`

const DELETEDGET = `
select * from cards
where status = 'deleted'
`

const POSTSELECT = `
insert into cards(sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,image,thema,company)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *
`

const PUTSELECT = `
update cards SET sub_id = $1,date=$2,time=$3,title = $4,username = $5,proffesa = $6,turi = $7,description = $8,phone = $9,phone2 = $10,image = $11,thema = $12,status = $13,company = $14
where card_id = $13 returning *
`
const DELETESELECT = `
update cards SET status = $1 where card_id = $2 returning *
`
const ADMINACTIVED = `
update cards SET status = $1 where card_id = $2 returning *
`
module.exports = {
    GETSELECT,PENDINGGET,DELETEDGET , POSTSELECT ,PUTSELECT ,DELETESELECT , ADMINACTIVED
}