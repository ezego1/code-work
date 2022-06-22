const value = {
	code: 0,
	description: 'Success',
	individualContext: {
		baseId: 'e8b7f0d5-e0be-4e68-a1a6-0484d7d2372b',
		name: 'Ashaolu Adeola',
		organizationVerificationStatus: null,
		contexts: [
			{
				productBaseId: '609b2586-e896-4c66-8ac2-d8f7a06cc5ff',
				productName: 'SAS-P',
				productUserCategoryBaseId:
					'ace034b0-065c-4659-8101-5bdd85b0cbda',
				productUserCategoryCode: 'CSR',
				productUserCategoryName: 'CONSUMER',
				privileges: [
					'SASP_MAKE_ORDER',
					'VIEW_SERVICE',
					'VIEW_SERVICE_REQUEST',
				],
				roleBaseIds: ['9cdac4cb-af0c-4b4a-a573-e3688a2455k7'],
			},
			{
				productBaseId: '609b2586-e896-4c66-8ac2-d8f7a06cc5ff',
				productName: 'SAS-P',
				productUserCategoryBaseId: 'PAM',
				productUserCategoryCode: 'PAM',
				productUserCategoryName: 'PRODUCT_ADMIN',
				privileges: [
					'CAG',
					'CER',
					'CEU',
					'CREATE_USERS',
					'MWT',
					'PAM',
					'RAD',
					'RCM',
					'RMM',
					'SASP_ASSIGN_ORDER',
					'SASP_COMPLETE_SERVICE',
					'SASP_MAP_AGENT_TO_AREAS',
					'SASP_VIEW_AGENT',
					'SASP_VIEW_AREAS',
					'SASP_VIEW_ORDERS',
					'SASP_VIEW_ROLES',
					'SASP_VIEW_SERVICE_DELIVERY',
					'SASP_VIEW_USERS',
					'THM',
					'UAD',
					'UAU',
					'UMM',
					'URP',
					'VIEW_SERVICE',
					'VIEW_SERVICE_ENROLLMENT_REPORT',
					'VIEW_SERVICE_OPTIN',
					'VIEW_SERVICE_REQUEST',
				],
				roleBaseIds: ['fa543027-425b-68ae-83c8-5d238e4b8ef9'],
			},
		],
	},
	organizationContexts: [],
};

function check(data) {
	
	const individualContext = data.individualContext;
    if (individualContext) {
        let result = false;
        const contexts = individualContext.contexts
	for (const context of contexts) {
		if (
			context.productUserCategoryBaseId == 'PAM' &&
			context.productUserCategoryCode == 'PAM'
		) {
			result = true;
		}
		{
			continue
		}
	}
    return result;
}
return false
}

const you = check(value);
console.log(you);
