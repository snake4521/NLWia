import { Pipeline, pipeline } from "@xenova/transformers"
import { transcriptionExample } from "./utils/transcription.js"
export async function transcribe() {
  try { 
    //return transcriptionExample

    console.log("Realizando a transcrição...")
    const transcribe = await pipeline("automatic-speech-recognition", "Xenova/wgisper-sm")
  } catch (error) {
    throw new Error(error)
  }
 
}
