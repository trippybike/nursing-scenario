import { SceneModel } from "./scenes-model";

export const scene2: SceneModel = {
  responses: [
    {
      response:
        "Is it okay if we talk for a few minutes so I can learn more from you about your injection practice?",
      codeMessage:
        "This approach allows the patient to decide if they want to talk about their drug use practice and also positions the patient as the person in the power position. This approach allows the patient to see that the nurse is interested in learning and hearing from the patient.",
      correct: true,
      src: "scene2/r1.m4v",
    },
    {
      response:
        "I hope that you will remember how much your abscess hurts the next time you  decide to inject drugs.",
      codeMessage:
        "This is not a therapeutic response. This response does not demonstrate an understanding of substance use disorder and is a form of shaming the patient.",
      correct: false,
      src: "scene2/r2.m4v",
    },
    {
      response:
        "You know, we have a lot of really sick people in the hospital that need my attention.",
      codeMessage:
        "This is not a therapeutic response. This response does not demonstrate an understanding of substance use disorder and is a form of shaming the patient. The nurse is suggesting that the patient isn’t as sick as others in the hospital and doesn’t need to be there.",
      correct: false,
      src: "scene2/r3.m4v",
    },
  ],
  situation:
    "The nurse checks in on the patient to see how they are doing. The patient appears to be more comfortable. The patient has visible injection marks on their arm in varying forms of healing as well as other reddened or bruised injection site marks.",
  sceneId: 1,
};
