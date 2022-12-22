Red Social API 

url base: http://localhost:9000/api/v1

- /users
    - /me
    - /:id
    - /:id/follow
- /auth 
    - /login
- /posts
    - /me === Mis propias publicaciones 
    - /users/:id === Publicaciones de usuarios en particular
    - /:id === Una publicacion en especifico 
    - /:id/comments == Los comentarios de una publicacion en especifico 
    - /:id/likes === Los likes de unha publicacion en especifico 
- /friends
    - /:id

- /follows 
    - /:id

- / followers
    - /:id