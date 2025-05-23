let arr = [
    {
        ruleDimension: '有效性',
        evaluationCriteria: '严格',
        weightValue: 'a',
        scoreOne: 'a1',
        scoreTwo: 'a2',
        scoreThree: 'a3',
        scoreFour: 'a4'
    },
    {
        ruleDimension: '有效性',
        evaluationCriteria: '一般',
        weightValue: 'b',
        scoreOne: 'b1',
        scoreTwo: 'b2',
        scoreThree: 'b3',
        scoreFour: 'b4'
    },
    {
        ruleDimension: '完整性',
        evaluationCriteria: '严格',
        weightValue: 'c',
        scoreOne: 'c1',
        scoreTwo: 'c2',
        scoreThree: 'c3',
        scoreFour: 'c4'
    },
    {
        ruleDimension: '完整性',
        evaluationCriteria: '一般',
        weightValue: 'd',
        scoreOne: 'd1',
        scoreTwo: 'd2',
        scoreThree: 'd3',
        scoreFour: 'd4'
    },
    {
        ruleDimension: '唯一性',
        evaluationCriteria: '严格',
        weightValue: 'e',
        scoreOne: 'e1',
        scoreTwo: 'e2',
        scoreThree: 'e3',
        scoreFour: 'e4'
    },
    {
        ruleDimension: '唯一性',
        evaluationCriteria: '一般',
        weightValue: 'f',
        scoreOne: 'f1',
        scoreTwo: 'f2',
        scoreThree: 'f3',
        scoreFour: 'f4'
    },
    {
        ruleDimension: '一致性',
        evaluationCriteria: '严格',
        weightValue: 'g',
        scoreOne: 'g1',
        scoreTwo: 'g2',
        scoreThree: 'g3',
        scoreFour: 'g4'
    },
    {
        ruleDimension: '一致性',
        evaluationCriteria: '一般',
        weightValue: 'h',
        scoreOne: 'h1',
        scoreTwo: 'h2',
        scoreThree: 'h3',
        scoreFour: 'h4'
    },
    {
        ruleDimension: '准确性',
        evaluationCriteria: '严格',
        weightValue: 'i',
        scoreOne: 'i1',
        scoreTwo: 'i2',
        scoreThree: 'i3',
        scoreFour: 'i4'
    },
    {
        ruleDimension: '准确性',
        evaluationCriteria: '一般',
        weightValue: 'j',
        scoreOne: 'j1',
        scoreTwo: 'j2',
        scoreThree: 'j3',
        scoreFour: 'j4'
    },
    {
        ruleDimension: '其他',
        evaluationCriteria: '严格',
        weightValue: 'k',
        scoreOne: 'k1',
        scoreTwo: 'k2',
        scoreThree: 'k3',
        scoreFour: 'k4'
    },
    {
        ruleDimension: '其他',
        evaluationCriteria: '一般',
        weightValue: 'l',
        scoreOne: 'l1',
        scoreTwo: 'l2',
        scoreThree: 'l3',
        scoreFour: 'l4'
    }
];
// function transformData(arr) {
//     return arr.reduce((acc, item) => {
//         const { ruleDimension, evaluationCriteria } = item;
//         const key = evaluationCriteria === '严格' ? 'strict' : 'general';

//         // 查找是否已有该 ruleDimension 的对象
//         let group = acc.find(i => i.ruleDimension === ruleDimension);

//         if (!group) {
//             group = {
//                 ruleDimension,
//                 strict: {},
//                 general: {}
//             };
//             acc.push(group);
//         }

//         group[key] = {
//             weightValue: item.weightValue,
//             scoreOne: item.scoreOne,
//             scoreTwo: item.scoreTwo,
//             scoreThree: item.scoreThree,
//             scoreFour: item.scoreFour
//         };

//         return acc;
//     }, []);
// }
function transformData(arr) {
    let letterCode = 97; // 'a' 的 ASCII 码

    return arr.reduce((acc, item) => {
        const { ruleDimension, evaluationCriteria } = item;
        const targetKey = evaluationCriteria === '严格' ? 'strict' : 'general';

        // 获取当前字母并递增
        const key = String.fromCharCode(letterCode++);
        
        // 查找是否已有该 ruleDimension 的对象
        let group = acc.find(i => i.ruleDimension === ruleDimension);

        if (!group) {
            group = {
                ruleDimension,
                strict: {},
                general: {}
            };
            acc.push(group);
        }

        // 设置对应字段，并写入 key
        group[targetKey] = {
            key,
            weightValue: item.weightValue,
            scoreOne: item.scoreOne,
            scoreTwo: item.scoreTwo,
            scoreThree: item.scoreThree,
            scoreFour: item.scoreFour
        };

        return acc;
    }, []);
}
let ddd = transformData(arr);
console.log('ddd',ddd);
