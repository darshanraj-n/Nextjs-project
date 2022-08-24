// import {comments} from '../../data'
import {comments} from '../../db.json'

export default async function handler(req, res) {
 
  if (req.method === 'GET') {
    res.status(200).json(comments)  //.status - is a function to set status code, .json - sends json response
}
else if (req.method === 'POST') {
    const comment = req.body.enteredMeetupData
  
    const newComment = {
        id: comments.length+1,
        text: comment,
    }
    // console.log(newComment);
    comments.push(newComment)
    res.status(201).json(newComment)
    // res.status(201).json({message:'meetup inserted'})
}

}
  



