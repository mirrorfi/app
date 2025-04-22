import { model, models, Schema } from 'mongoose';

export interface ITest {
    _id: string;
}

const TestSchema = new Schema<ITest>({
    _id: {
        type: String,
        required: true,
    },
});

const Test = models.Test || model<ITest>('Test', TestSchema);

export default Test;