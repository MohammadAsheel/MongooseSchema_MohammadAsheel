const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
});
const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    durationWeeks: {
        type: Number,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
});

const student = mongoose.model('student',studentSchema);
const Course = mongoose.model('course',courseSchema);
module.exports = {Student, course};