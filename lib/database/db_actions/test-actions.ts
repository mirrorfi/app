"use server"

import { connectToDatabase } from "../index"
import Test from "../models/test-model";
import { handleError } from "../../utils";
import { revalidatePath } from "next/cache";

export const getAllTest = async () => {
    try {
      await connectToDatabase();
  
      const contacts = await Test.find();

      console.log("Test fetch")
  
      return JSON.parse(JSON.stringify(contacts));
    } catch (error) {
      console.error("Error fetching Test:", error);
      handleError(error);
    }
}