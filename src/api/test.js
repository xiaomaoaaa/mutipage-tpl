import request from '@/utils/request'
var testApi = {
	getnavigate: () => {
		return request({
			url: "/navigate",
			method: 'get',
		})
	},
	gettools: () => {
		return request({
			url: "/shortcut",
			method: 'get',
		})
	},
	getuser: () => {
		return request({
			url: "/login/user",
			method: 'get',
		})
	},

	getredurl: () => {
		return request({
			url: `/common/data`,
			method: 'get',
		})
	}
}
export default testApi