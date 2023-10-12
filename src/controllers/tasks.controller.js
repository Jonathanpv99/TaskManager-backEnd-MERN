import Task from '../models/task.model.js';

export const getTasks = async ( req, res ) => {
    const tasks = await Task.find({
        user: req.user.id
    });
    //.populate('user); //podriamos usar el .populate para traer todos los datos de usuario
    res.json( tasks );
};

export const getTask = async ( req, res ) => {
    const task = await Task.findById( req.params.id );

    if( !task ) return res.status(404).json({message: 'Task not found'});
    res.json( task );
};

export const createTask = async ( req, res ) => {
    const { title, description, date } = req.body;

    try {
        
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id,
        });
        const savedTask = await newTask.save();

        res.json( savedTask );


    } catch (error) {
        res.status(500).json( [ "" + error.message ]);
    }
};


export const deleteTask = async ( req, res ) => {
    const task = await Task.findByIdAndDelete( req.params.id );

    if( !task ) return res.status(404).json({message: 'Task not found'});
    
    return res.status(204).json({message: 'delete complete '});
};

export const updateTask = async ( req, res ) => {

    const task = await Task.findByIdAndUpdate( req.params.id, req.body, {new: true} );

    if( !task ) return res.status(404).json(['Task not found']);
    res.json( task );

};