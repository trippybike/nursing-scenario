import { ResponseModel, SceneModel } from "./scenes-model";

export const scene3: SceneModel = {
  responses: [
    {
      response:
        "Thank you for sharing your barriers with me. Can you talk me through how you prepare your drugs, and how you are injecting so I can get a better sense of how I can help you to decrease your risk of getting an abscess?",
      codeMessage:
        "This is a therapeutic response that comes from a harm reduction approach. The nurse is not insisting on abstinence, rather wants to learn from the patient about their injection practice as a way to identify risky steps in the process. This approach builds rapport and promotes positive change in the patient’s drug use behaviors.",
      correct: true,
      src: "scene3/r1.m4v",
    },
    {
      response:
        "What you are doing isn’t going to stop you from getting abscesses. You need to use a new syringe every time.",
      codeMessage:
        "This is not a therapeutic response and doesn’t reinforce to the patient that they are being heard. The patient already identified their barriers and the nurse did not work with the patient to decrease their risks by exploring other options or safer ways to inject.",
      correct: false,
      src: "scene3/r2.m4v",
    },
    {
      response:
        "Your arms are a mess. You do know that you are damaging your veins and will keep getting infections if you keep doing drugs.",
      codeMessage:
        "This is not a therapeutic response. The nurse is demonstrating stigmatizing and condescending behaviors. This approach not only damages the nurse/patient relationship but also has a negative impact on the patient’s mental well-being.",
      correct: false,
      src: "scene3/r3.m4v",
    },
  ],
  situation:
    'The nurse is sitting next to the patient examining their injection sites. The patient reports that they often use the same syringe "until it hurts too much to use because I can’t afford to buy new ones on the street" and,  “I know I am not supposed to, but sometimes I will use someone else’s syringe,  but I always make sure to wipe it on my shirt first before I use it.',
  sceneId: 2,
};
