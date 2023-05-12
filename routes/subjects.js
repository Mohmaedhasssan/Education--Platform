import { Router } from 'express';
import { create , index, store , show ,edit ,update,deleteOne} from '../controllers/subjects.js';

const router = new Router();


router.get('/', index);
router.get('/create', create);
router.post('/', store);
router.get('/:_id', show);
router.put('/:_id',update)
router.get('/:_id/edit',edit)
router.delete('/:_id',deleteOne)



// router.get('/', (req,res) => {
//     console.log(mongoose.connection.readyState);
//     res.render('subjects/all')
// });

//  router.get('/d', async (req,res) => {
    //     const departments = await department.find();
//     console.log(departments);
//      res.render('subjects/all',{department})
//  });


// router.get('/create_departments', async(req,res) => {
//     await subject.create({
//         name: 'Computer Scince',
//         code: 'CS',
//     });

//     await subject.create({
//         name: 'Information System',
//         code: 'IS',
//     });

//     await subject.create({
//         name: 'Information Technology',
//         code: 'IT',
//     });
//     res.send('Added');
// });
// router.get('/create_subject', async(req,res) => {
//     await subject.create({
//         name: ' Java Scribt',
//         code: 'js',
//     });

//     await subject.create({
//         name: ' System Analysis',
//         code: 'SA',
//     });

//     await subject.create({
//         name: ' Cloud',
//         code: 'C1',
//     });
//     res.send('Added');
// });

export default router;