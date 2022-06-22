const wa = [
    {
        documentType: "NMS",
        mandatoryFields: "4"
    },
    {
        documentType: "CN",
        mandatoryFields: "1000000"
    }
]

const useCase = 'NMS'

const obj = wa.filter((item) => item.documentType === useCase)[0];
console.log(obj.mandatoryFields)