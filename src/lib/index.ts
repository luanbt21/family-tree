import * as remote from './api.remote';

function createProxy(path: string[] = []): any {
	const handler = {
		get(target: any, prop: string): any {
			if (prop === 'then') return undefined;
			return createProxy([...path, prop]);
		},
		apply(target: any, thisArg: any, args: any[]): any {
			const method = path[path.length - 1];
			if (['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
				const apiPath = path.slice(0, -1);
				const payload = args[0];
				return executeRemoteCall(apiPath, method, payload);
			}

			const params = args[0];
			if (params && typeof params === 'object') {
				const paramValues = Object.values(params).map(String);
				return createProxy([...path, ...paramValues]);
			}
			return createProxy([...path, ...args]);
		}
	};
	return new Proxy(() => {}, handler);
}

async function executeRemoteCall(path: string[], method: string, payload: any) {
	try {
		let data: any = null;

		// 1. trees
		if (path[1] === 'trees') {
			if (path.length === 2) {
				if (method === 'get') data = await remote.getTrees();
				else if (method === 'post') data = await remote.createTree(payload);
			} else if (path.length === 3) {
				const id = path[2];
				if (method === 'get') data = await remote.getTree(id);
				else if (method === 'delete') data = await remote.deleteTree(id);
			} else if (path.length === 4 && path[3] === 'members') {
				const id = path[2];
				if (method === 'get') data = await remote.getTreeMembers(id);
				else if (method === 'post') data = await remote.addTreeMember({ id, ...payload });
			} else if (path.length === 5 && path[3] === 'members') {
				const id = path[2];
				const memberId = path[4];
				if (method === 'patch') data = await remote.updateTreeMember({ id, memberId, ...payload });
				else if (method === 'delete') data = await remote.deleteTreeMember({ id, memberId });
			}
		}

		// 2. workspace
		if (path[1] === 'workspace') {
			if (path[2] === 'nodes') {
				if (path.length === 3 && method === 'post') {
					data = await remote.createNode(payload);
				} else if (path.length === 4) {
					const id = path[3];
					if (method === 'patch') data = await remote.updateNode({ id, payload });
					else if (method === 'delete') data = await remote.deleteNode(id);
				}
			} else if (path[2] === 'edges') {
				if (path.length === 3 && method === 'post') {
					data = await remote.createEdge(payload);
				} else if (path.length === 4) {
					const id = path[3];
					if (method === 'delete') data = await remote.deleteEdge(id);
				}
			} else if (path[2] === 'custom-fields') {
				if (path.length === 3 && method === 'post') {
					data = await remote.createCustomField(payload);
				} else if (path.length === 4) {
					const id = path[3];
					if (method === 'delete') data = await remote.deleteCustomField(id);
				}
			} else if (path[2] === 'kinship-terms') {
				if (path.length === 3 && method === 'post') {
					data = await remote.saveKinshipTerm(payload);
				} else if (path.length === 4) {
					const id = path[3];
					if (method === 'delete') data = await remote.deleteKinshipTerm(id);
				}
			}
		}

		return { data, error: null };
	} catch (err: any) {
		return { data: null, error: { value: err.message || 'Error' } };
	}
}

export const client = createProxy();
export const config = {
	runtime: 'edge'
};
