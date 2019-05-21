import mongoose, { Schema } from 'mongoose';

const FilmSchema = new Schema({
    title: {type: String, required: true},
    country: {type: String, required: true},
    genres: {type: Array, required: true},
    rating: {type: Number, required: true},
    duration: {type: Number, required: true},
    img: {type: String, required: true}
});

export default mongoose.model('Film', FilmSchema);
