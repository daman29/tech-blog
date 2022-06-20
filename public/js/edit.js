const editPost = async (event) => {
    event.preventDefault()

    console.log("edit")
}

const deletePost = async (event) => {
    event.preventDefault()

    console.log("delete")
}

document.querySelector('[data-button="edit"]').addEventListener("click", editPost)
document.querySelector('[data-button="delete"]').addEventListener("click", deletePost)