import Cookies from 'universal-cookie'
const cookies = new Cookies()

// export const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTMwMDc2Nzg2MiIsImlkIjoxLCJpYXQiOjE3MDA4MjUyMjQsImV4cCI6MTcwMTQzMDAyNH0.kXoVVPyHnnNY2jhpAOWVM7JNn3Cxkc1FRJahRPFKWxA'
export const token = cookies.get('jwt') ? cookies.get('jwt') : null
export const user_info = cookies.get('user') ? cookies.get('user') : null
