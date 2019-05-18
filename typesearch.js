const HEART_CLASSES_TYPE =['Coronary Heart Disease','Myocardial Infraction','Hypertensive Heart Disease','Heart Arrhythmia','Sorry cannot classify the type'];
const HEART_CLASS = HEART_CLASSES_TYPE.length;

const HEART_DATAA = [
  [56,0,1,140,294,0,0,153,0,1.3,1,0,2,0],
[54,1,0,140,239,0,1,160,0,1.2,2,0,2,0],
[58,0,3,150,283,1,0,162,0,1,2,0,2,0],
[43,1,0,150,247,0,1,171,0,1.5,2,0,2,0],
[69,0,3,140,239,0,1,151,0,1.8,2,2,2,0],
[61,1,2,150,243,1,1,137,1,1,1,0,2,0],
[71,0,1,160,302,0,1,162,0,0.4,2,2,2,0],
[65,0,2,140,417,1,0,157,0,0.8,2,1,2,0],
[54,1,2,150,232,0,0,165,0,1.6,2,0,3,0],
[65,0,2,155,269,0,1,148,0,0.8,2,0,2,0],
[65,0,2,160,360,0,0,151,0,0.8,2,0,2,0],
[51,0,2,140,308,0,0,142,0,1.5,2,1,2,0],
[39,1,2,140,321,0,0,182,0,0,2,0,2,0],
[44,1,2,140,235,0,0,180,0,0,2,0,2,0],
[47,1,2,138,257,0,0,156,0,0,2,0,2,0],
[53,0,0,138,234,0,0,160,0,0,2,0,2,0],
[63,0,2,135,252,0,0,172,0,0,2,0,2,0],
[51,1,0,140,261,0,0,186,1,0,2,0,2,0],
[55,0,1,135,250,0,0,161,0,1.4,1,0,2,0],
[52,1,3,152,298,1,1,178,0,1.2,1,0,3,0],
[54,0,1,132,288,1,0,159,1,0,2,1,2,0],
[62,0,0,140,394,0,0,157,0,1.2,1,0,2,0],
[43,1,2,130,315,0,1,162,0,1.9,2,1,2,0],
[53,1,2,130,246,1,0,173,0,0,2,3,2,0],
[42,1,3,148,244,0,0,178,0,0.8,2,2,2,0],
[59,1,3,178,270,0,0,145,0,4.2,0,0,3,0],
[64,0,0,180,325,0,1,154,1,0,2,0,2,0],
[64,0,2,140,313,0,1,133,0,0.2,2,0,3,0],
[67,0,2,152,277,0,1,172,0,0,2,1,2,0],
[49,0,1,134,271,0,1,162,0,0,1,0,2,0],
[70,1,1,156,245,0,0,143,0,0,2,0,2,0],
[60,0,3,150,240,0,1,171,0,0.9,2,0,2,0],
[66,0,2,146,278,0,0,152,0,0,1,1,2,0],
[55,0,1,132,342,0,1,166,0,1.2,2,0,2,0],
[63,1,3,145,233,1,0,150,0,2.3,0,0,1,1],
[57,1,0,140,192,0,1,148,0,0.4,1,0,1,1],
[66,0,3,150,226,0,1,114,0,2.6,0,0,2,1],
[40,1,3,140,199,0,1,178,1,1.4,2,0,3,1],
[53,1,0,142,226,0,0,111,1,0,2,0,3,1],
[69,1,3,160,234,1,0,131,0,0.1,1,1,2,1],
[45,0,0,138,236,0,0,152,1,0.2,1,0,2,1],
[46,0,0,138,243,0,0,152,1,0,1,0,2,1],
[59,1,0,138,271,0,0,182,0,0,2,0,2,1],
[66,1,0,160,228,0,0,138,0,2.3,2,0,1,1],
[64,1,3,170,227,0,0,155,0,0.6,1,0,3,1],
[42,1,0,140,226,0,1,178,0,0,2,0,2,1],
[38,1,2,138,175,0,1,173,0,0,2,4,2,1],
[38,1,2,138,175,0,1,173,0,0,2,4,2,1],
[52,1,2,172,199,1,1,162,0,0.5,2,0,3,1],
[57,1,2,150,168,0,1,174,0,1.6,2,0,2,1],
[46,0,2,142,177,0,0,160,1,1.4,0,0,2,1],
[59,1,2,150,212,1,1,157,0,1.6,2,0,2,1],
[59,1,1,140,221,0,1,164,1,0,2,0,2,1],
[58,1,2,140,211,1,0,165,0,0,2,0,2,1],
[52,1,2,138,223,0,1,169,0,0,2,4,2,1],
[63,0,1,140,195,0,1,179,0,0,2,2,2,1],
[57,1,2,150,126,1,1,173,0,0.2,2,1,3,1],
[54,0,2,160,201,0,1,163,0,0,2,1,2,1],
[76,0,2,140,197,0,2,116,0,1.1,1,0,2,1],
[57,0,0,120,354,0,1,163,1,0.6,2,0,2,2],
[59,1,0,135,234,0,1,161,0,0.5,1,0,3,2],
[65,1,0,120,177,0,1,140,0,0.4,2,0,3,2],
[51,1,3,125,213,0,0,125,1,1.4,2,1,2,2],
[64,1,3,110,211,0,0,144,1,1.8,1,0,2,2],
[53,0,0,130,264,0,0,143,0,0.4,1,0,2,2],
[45,1,0,104,208,0,0,148,1,3,1,0,2,2],
[66,1,0,120,302,0,0,151,0,0.4,1,0,2,2],
[48,1,0,122,222,0,0,186,0,0,2,0,2,2],
[45,1,0,115,260,0,0,185,0,0,2,0,2,2],
[57,0,0,128,303,0,0,159,0,0,2,1,2,2],
[34,1,3,118,182,0,0,174,0,0,2,0,2,2],
[52,1,3,118,186,0,0,190,0,0,1,0,1,2],
[35,0,0,138,183,0,1,182,0,1.4,2,0,2,2],
[62,0,0,124,209,0,1,163,0,0,2,0,2,2],
[42,0,0,102,265,0,0,122,0,0.6,1,0,2,2],
[58,0,0,100,248,0,0,122,0,1,1,0,2,2],
[57,1,0,132,207,0,1,168,1,0,2,0,3,2],
[52,1,0,108,233,1,1,147,0,0.1,2,3,3,2],
[50,0,0,110,254,0,0,159,0,0,2,0,2,2],
[43,1,0,110,211,0,1,161,0,0,2,0,3,2],
[56,1,3,120,193,0,0,162,0,1.9,1,0,3,2],
[64,0,0,130,303,0,1,122,0,2,1,2,2,2],
[47,1,0,112,204,0,1,143,0,0.1,2,0,2,2],
[49,0,0,130,269,0,1,163,0,0,2,0,2,2],
[57,1,0,110,201,0,1,126,1,1.5,1,0,1,2],
[43,1,0,115,303,0,1,181,0,1.2,1,0,2,2],
[64,1,0,128,263,0,1,105,1,0.2,1,1,3,2],
[67,0,0,106,223,0,1,142,0,0.3,2,2,2,2],
[71,0,0,112,149,0,1,125,0,1.6,1,0,2,2],
[39,0,2,138,220,0,1,152,0,0,1,0,2,2],
[56,1,1,120,236,0,1,178,0,0.8,2,0,2,3],
[44,1,1,120,263,0,1,173,0,0,2,0,3,3],
[50,0,2,120,219,0,1,158,0,1.6,1,0,2,3],
[58,0,2,120,340,0,1,172,0,0,2,0,2,3],
[51,1,2,110,175,0,1,123,0,0.6,2,0,2,3],
[41,0,1,105,198,0,1,168,0,0,2,1,2,3],
[52,1,1,120,325,0,1,172,0,0.2,2,0,2,3],
[44,0,2,108,141,0,1,175,0,0.6,1,0,2,3],
[71,0,2,110,265,1,0,130,0,0,2,1,2,3],
[51,1,2,100,222,0,1,143,1,1.2,1,0,2,3],
[44,1,1,120,220,0,1,170,0,0,2,0,2,3],
[54,1,2,120,258,0,0,147,0,0.4,1,0,3,3],
[51,1,2,94,227,0,1,154,1,0,2,1,3,3],
[58,1,2,105,240,0,0,154,1,0.6,1,0,3,3],
[41,1,2,112,250,0,1,179,0,0,2,0,2,3],
[60,0,2,102,318,0,1,160,0,0,2,1,2,3],
[67,0,2,115,564,0,0,160,0,1.6,1,0,3,3],
[68,1,2,118,277,0,1,151,0,1,2,1,3,3],
[46,1,1,101,197,1,1,156,0,0,2,0,3,3],
[54,0,2,110,214,0,1,158,0,1.6,1,0,2,3],
[45,0,1,112,160,0,1,138,0,0,1,0,2,3],
[42,1,2,120,240,1,1,194,0,0.8,0,0,3,3],
[68,0,2,120,211,0,0,115,0,1.5,1,0,2,3],
[50,0,1,120,244,0,1,162,0,1.1,2,0,2,3],
[37,0,2,120,215,0,1,170,0,0,2,0,2,3],
[46,0,1,105,204,0,1,172,0,0,2,0,2,3],
[41,0,2,112,268,0,0,172,1,0,2,0,2,3],
[54,0,2,108,267,0,0,167,0,0,2,0,2,3],
[39,0,2,94,199,0,1,179,0,0,2,0,2,3],
[34,0,1,118,210,0,1,192,0,0.7,2,0,2,3],
[74,0,1,120,269,0,0,121,1,0.2,2,1,2,3],
[42,1,1,120,295,0,1,162,0,0,2,0,2,3],
[41,1,1,110,235,0,1,153,0,0,2,0,2,3],
[60,0,2,120,178,1,1,96,0,0,2,0,2,3],
[51,0,2,120,295,0,0,157,0,0.6,2,0,2,3],
[44,1,2,120,226,0,1,169,0,0,2,0,2,3],
[56,1,1,120,240,0,1,169,0,0,0,0,2,3],
[41,1,1,120,157,0,1,182,0,0,2,0,2,3],
[37,1,2,130,250,0,1,187,0,3.5,0,0,2,4],
[41,0,1,130,204,0,0,172,0,1.4,2,0,2,4],
[48,0,2,130,275,0,1,139,0,0.2,2,0,2,4],
[49,1,1,130,266,0,1,171,0,0.6,2,0,2,4],
[44,1,2,130,233,0,1,179,1,0.4,2,0,2,4],
[53,1,2,130,197,1,0,152,0,1.2,0,0,2,4],
[44,1,1,130,219,0,0,188,0,0,2,0,2,4],
[54,1,2,125,273,0,0,152,0,0.5,0,1,2,4],
[54,0,2,135,304,1,1,170,0,0,2,0,2,4],
[48,1,1,130,245,0,0,180,0,0.2,1,0,2,4],
[53,0,2,128,216,0,0,115,0,0,2,0,0,4],
[51,0,2,130,256,0,0,149,0,0.5,2,0,2,4],
[62,1,2,130,231,0,1,146,0,1.8,1,3,3,4],
[52,1,1,134,201,0,1,158,0,0.8,2,1,2,4],
[54,1,1,108,309,0,1,156,0,0,2,0,3,4],
[41,1,1,135,203,0,1,132,0,0,1,0,1,4],
[45,0,1,130,234,0,0,175,0,0.6,1,0,2,4],
[29,1,1,130,204,0,0,202,0,0,2,0,2,4],
[43,0,2,122,213,0,1,165,0,0.2,1,0,2,4],
[51,1,2,125,245,1,0,166,0,2.4,1,0,2,4],
[52,1,1,128,205,1,1,184,0,0,2,0,2,4],
[45,1,1,128,308,0,0,170,0,0,2,0,2,4],
[48,1,2,124,255,1,1,175,0,0,2,2,2,4],
[50,1,2,129,196,0,1,163,0,0,2,0,2,4],
[55,1,1,130,262,0,1,155,0,0,2,0,2,4],
[41,1,2,130,214,0,0,168,0,2,1,0,2,4],
[52,0,2,136,196,0,0,169,0,0.1,1,0,2,4],
[41,0,1,126,306,0,1,163,0,0,2,0,2,4],
[62,1,1,128,208,1,0,140,0,0,2,0,2,4],
[42,0,2,120,209,0,1,173,0,0,1,0,2,4],
[44,0,2,118,242,0,1,149,0,0.3,1,1,2,4],
[42,1,2,130,180,0,1,150,0,0,2,0,2,4],
[58,0,0,130,197,0,1,131,0,0.6,1,0,2,4],
[47,1,2,130,253,0,1,179,0,0,2,0,2,4],
[35,1,1,122,192,0,1,174,0,0,2,0,2,4],
[58,1,1,125,220,0,1,144,0,0.4,1,4,3,4],
[56,1,1,130,221,0,0,163,0,0,2,0,3,4],
];

function convertToTensor(data, targets, testSplit) {
  const numExamples = data.length;
  if (numExamples !== targets.length) {
    throw new Error('data and split have different numbers of examples');
  }

  // Split the data into a training set and a tet set, based on `testSplit`.
  const numTestExamples = Math.round(numExamples * testSplit);
  const numTrainExamples = numExamples - numTestExamples;

  const xDims = data[0].length;

  // Create a 2D `tf.Tensor` to hold the feature data.
  const xs = tf.tensor2d(data, [numExamples, xDims]);

  // Create a 1D `tf.Tensor` to hold the labels, and convert the number label
  // from the set {0, 1, 2} into one-hot encoding (.e.g., 0 --> [1, 0, 0]).
  const ys = tf.oneHot(tf.tensor1d(targets).toInt(), HEART_CLASS);

  // Split the data into training and test sets, using `slice`.
  const xTrain = xs.slice([0, 0], [numTrainExamples, xDims]);
  const xTest = xs.slice([numTrainExamples, 0], [numTestExamples, xDims]);
  const yTrain = ys.slice([0, 0], [numTrainExamples, HEART_CLASS]);
  const yTest = ys.slice([0, 0], [numTestExamples, HEART_CLASS]);
  return [xTrain, yTrain, xTest, yTest];
}

function getHeartData(testSplit) {
  return tf.tidy(() => {
    const dataByClass = [];
    const targetsByClass = [];
    for (let i = 0; i < HEART_CLASSES_TYPE.length; ++i) {
      dataByClass.push([]);
      targetsByClass.push([]);
    }
    for (const example of HEART_DATAA) {
      const target = example[example.length - 1];
      const data = example.slice(0, example.length - 1);
      dataByClass[target].push(data);
      targetsByClass[target].push(target);
    }

    console.log(dataByClass);
    console.log(targetsByClass);

    const xTrains = [];
    const yTrains = [];
    const xTests = [];
    const yTests = [];
    for (let i = 0; i < HEART_CLASSES_TYPE.length; ++i) {
      const [xTrain, yTrain, xTest, yTest] =
          convertToTensor(dataByClass[i], targetsByClass[i], testSplit);
      xTrains.push(xTrain);
      yTrains.push(yTrain);
      xTests.push(xTest);
      yTests.push(yTest);
    }

    const concatAxis = 0;
    const test1 = xTrains;
    const test2 = tf.concat(xTrains,concatAxis);
    console.log(test1);
    console.log(test2);
    return [
      tf.concat(xTrains, concatAxis), tf.concat(yTrains, concatAxis),
      tf.concat(xTests, concatAxis), tf.concat(yTests, concatAxis)
    ];
  });
}
