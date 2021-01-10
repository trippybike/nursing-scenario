import { SceneModel } from "./scenes-model";

export const scene4: SceneModel = {
  responses: [
    {
      response:
        "On a scale of 0 to 10, with 0 being not at all ready and 10 being very ready, how ready are you to stop using drugs?",
      codeMessage:
        "The nurse is assessing the patient’s readiness to change behaviors as this will allow the nurse to meet the patient where they are at. The nurse can tailor their education to fit the needs of the patient as the nurse recognizes that any positive change is a step toward recovery. Since the patient is not ready to quit using drugs, it is important that the nurse understands what types of education should be provided to keep the patient as safe as possible.",
      correct: true,
      src: "scene4/r1.m4v",
    },
    {
      response:
        "It’s good that you came to the emergency room to get that abscess looked at before it got worse. Next time, you should come earlier so that the abscess won’t get so bad.",
      codeMessage:
        "Although the nurse is praising the positive behavior of coming to the hospital, they are ending the statement with a condescending and patriarchal tone that may cause the patient to become defensive and resistant to treatment.",
      correct: false,
      src: "scene4/r2.m4v",
    },
    {
      response:
        "There are a lot of detox and treatment centers that you can go to. When you hit rock bottom, you will learn that you can’t keep living like this.",
      codeMessage:
        "This is not a therapeutic response and does not meet the patient where they are at in their life. This response does not build rapport with the patient or recognize their level of motivation to change behaviors.",
      correct: false,
      src: "scene4/r3.m4v",
    },
  ],
  situation:
    "The nurse has provided education to the patient about clean techniques for injecting, the importance of cleaning the skin, one use/one time syringe practice, and where to get free syringes. The nurse begins to talk to the patient about keeping safe, and where they are on wanting to change their behaviors around their drug use.",
  sceneId: 3,
};
