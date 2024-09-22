import { 
  summary, 
  detail
} from './demo/TD-DEMO.json';

export function threatDragon(): any {
  const { title, description } = summary;
  const { diagrams } = detail;
  
  const modelData = {
    title,
    description,
    threatModel: [
      {
        architectureItem: '',
        diagramType: '',
        attacks: {
          props: {},
          threats: [{}] as any
        },
      }
    ]
  }

  diagrams[0].cells.map((element, index) => {
    const {
      name,
      type,
      hasOpenThreats,
      threats,
      isALog,
      isEncrypted,
      isPublicNetwork,
      isSigned
    } = element.data;
    
    if(!hasOpenThreats) {
      return;
    }

    modelData.threatModel[index] = {
      architectureItem: name,
      diagramType: type,
      attacks: {
        props: {
          isALog,
          isEncrypted,
          isPublicNetwork,
          isSigned
        },
        threats,
      }
    }
  });

  const prompt = `
  I'll give you a JSON structure containing data of an 
  app I need to do threat modeling on. Based on the data
  I give you, create a list of security requirements
  based on OWASP ASVS so I can mitigate all the threats
  listed on the diagram.
  
  The JSON structure is:
  ${JSON.stringify(modelData)}
  `;

  return prompt;
}
