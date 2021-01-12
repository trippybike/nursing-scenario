import { ResponseModel, SceneModel } from "./scenes-model";

export const scene5: SceneModel = {
  responses: [
    {
      response:
        "Since you said that you are not ready to stop using right now, I won’t talk to you about treatment options, but please know that we are here to help you when and if you are ready. However, I would like to see how I can help you to keep yourself as safe as possible.  May I ask what steps you take to keep yourself safe when using?",
      codeMessage:
        "The nurse is assessing the patient’s safety while using drugs as a form of harm reduction. Any positive changes or behaviors should be acknowledged and praised. By asking the client what they presently do to keep safe, the nurse is able to meet the patient where they are at and provide further education and information as needed. The nurse provided information about how to get treatment if and when the patient was ready. This allows the patient to know where to go for help and also provides the patient with another opportunity to engage in treatment without feeling coerced.",
      correct: true,
      src: "scene5/r1.m4v",
    },
    {
      response:
        "You shouldn’t do drugs but if you are going to do them, you should make sure that you are being careful.",
      codeMessage:
        "The nurse’s statement doesn’t promote discussion about the patient’s way of keeping safe while using drugs. This is a missed opportunity to assess the patient’s risk factors and to provide harm reduction education.",
      correct: false,
      src: "scene5/r2.m4v",
    },
    {
      response:
        "You know, you’re a really smart person. I hope that you learn that being an addict isn’t going to get you anywhere in life.",
      codeMessage:
        "This is not a therapeutic message. The nurse used stigmatizing language and was judgmental of the patient. This statement does nothing to build rapport and instead damages the relationship between the patient and health care providers.",
      correct: false,
      src: "scene5/r3.m4v",
    },
  ],
  situation:
    "The patient is getting ready to be transferred to the inpatient medical unit to receive intravenous antibiotic therapy. The nurse has a few more minutes to talk with the patient before they leave. The nurse wants to ensure that the patient is reducing their harm and using drugs as safely as they can.",
  sceneId: 4
};
