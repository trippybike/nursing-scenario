import { SceneModel } from "./scenes-model";

export const scene1: SceneModel = {
  responses: [
    {
      response:
        "Why are you yelling at me? If you didn’t inject drugs than this wouldn’t have happened",
      codeMessage: "This is a stigmatizing response. Try again.",
      correct: false,
      src: "scene1/r1.m4v",
    },
    {
      response:
        "There isn’t anything that I can do for you. You know that you can’t have opioids. We don’t give opioids for abscesses",
      codeMessage:
        "This is a non-therapeutic response. Non opioid and non-pharmacological interventions could be used such as warm compresses, NSAIDS, and acetaminophen. This response may also result in the patient not seeking care the next time it is needed.",
      correct: false,
      src: "scene1/r2.m4v",
    },
    {
      response:
        "I can see that you are hurting. Can you tell me about your pain and I can see what I can do to help you?",
      codeMessage:
        "Nurse performs PQRST and administers NSAID and provides patient with a warm compress. This is a therapeutic response that acknowledges the patient’s discomfort and seeks to relieve the distress.",
      correct: true,
      src: "scene1/r3.m4v",
    },
  ],
  situation:
    "The nurse is caring for a 29 year old person admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana, alcohol, heroin, and cocaine. Their forearm is red and swollen and they just arrived to the emergency department 45 minutes ago. The CNA reports to you that the patient wants to see the nurse. You are entering the room to see the patient.",
  sceneId: 0
};
