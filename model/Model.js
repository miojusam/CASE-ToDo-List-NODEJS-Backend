const mongoose = require("mongoose");





const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now,
        required: true
        
    },
    done: {
        type: Boolean,
        default: false
    },
    hide: {
        type: Boolean,
        default: false
    },
}, { collection: 'todo' }
);


module.exports = mongoose.model("Todo", todoSchema);
