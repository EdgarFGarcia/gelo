import axios from 'axios'

export default function(Vue) {

	Vue.axios = {
		setupHeaderConfig (config) {
			const token = JSON.parse(localStorage.getItem('token'))
			// const csrf = window.csrfToken = document.querySelector('meta[name="csrf-token"]').content
			!config['headers'] ? config['headers'] = {} : null
			token ? config['headers']['Authorization'] = 'Bearer ' + token : null
			config['withCredentials'] = false
			config['baseURL'] = process.env.VUE_APP_API_URL
			config['headers']['Content-Type'] = 'application/json'
			// config['headers']['Origin'] = 'http://127.0.0.2'
			return config
		},

		post (url, params, config = { headers: {} }) {
			return new Promise(function(resolve) {
				const newConfig = Vue.axios.setupHeaderConfig(config)
				axios.post(url, params, newConfig)
					.then((response) => resolve(response))
					.catch((err) => resolve(err.response || err))
			})
		},

		get (url, params, config = { headers: {} }) {
			return new Promise(function(resolve) {
				config['params'] = params
				const newConfig = Vue.axios.setupHeaderConfig(config)
				axios.get(url, newConfig)
					.then((response) => resolve(response))
					.catch((err) => resolve(err.response || err))
			})
		},

		put (url, params, config = { headers: {} }) {
			return new Promise(function(resolve) {
				const newConfig = Vue.axios.setupHeaderConfig(config)
				// console.log(newConfig)
				axios.put(url, params, newConfig)
					.then((response) => resolve(response))
					.catch((err) => resolve(err.response || err))
			})
		},

		patch (url, params, config = { headers: {} }) {
			return new Promise(function(resolve) {
				const newConfig = Vue.axios.setupHeaderConfig(config)
				axios.patch(url, params, newConfig)
					.then((response) => resolve(response))
					.catch((err) => resolve(err.response || err))
			})
		},

		delete (url, config = { headers: {} }) {
			return new Promise((resolve, reject) => {
				const newConfig = Vue.axios.setupHeaderConfig(config)
				axios.delete(url, {
					...newConfig
				})
					.then((response) => resolve(response))
					.catch((err) => reject(err.response || err))
			})
		}
	}

	Object.defineProperties(Vue.prototype, {
		$axios: {
			get: () => {
				return Vue.axios
			}
		}
	})
}