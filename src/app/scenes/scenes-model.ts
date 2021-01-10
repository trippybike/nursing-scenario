export class ResponseModel {
  response: string;
  codeMessage: string;
  correct: boolean;
  src: string;
}

export class SceneModel {
  responses: ResponseModel[];
  situation: string;
  sceneId: number;
}
