export const state = () => ({
    list: [
        {
            id: 1,
            category_title: "Basic",
            content: [
                {
                    id: 1,
                    isChecked: false,
                    title: "i3-gaps"
                },
                {
                    id: 2,
                    isChecked: false,
                    title: "pulseaudio"
                }
            ]
        },
        {
            id: 2,
            category_title: "Communication",
            content: [
                {
                    id: 3,
                    isChecked: false,
                    title: "Discord"
                },
                {
                    id: 4,
                    isChecked: false,
                    title: "Zoom"
                },
                {
                    id: 5,
                    isChecked: true,
                    title: "Slack"
                }
            ]
        }
    ]
})

export const getters = {
    getLastCategoryItem: (state) => (category_id) => {
        const content_arr = state.list.find(x => x.id === category_id).content
        return content_arr[content_arr.length - 1].id
    }
}

export const mutations = {
    changeText(state, {category_id, id, text}) {
        const index_in_arr =  state.list.find(x=>x.id===category_id).content.findIndex(x=>x.id === id); 
        state.list.find(x=>x.id===category_id).content[index_in_arr].title = text;
    },
    changeCheck(state,{category_id, id, isChecked}){
        const index_in_arr =  state.list.find(x=>x.id===category_id).content.findIndex(x=>x.id === id); 
        state.list.find(x=>x.id===category_id).content[index_in_arr].isChecked = isChecked;
    },
    addEmpty(state, {category_id, new_id}) {
        state.list.find(x => x.id === category_id).content.push(
            {
                id: new_id,
                isChecked: false,
                title: ""
            }
        )
    },
    remove(state, {category_id, obj_id}){
        state.list.find(x=>x.id === category_id).content.splice(state.list.find(x=>x.id===category_id).content.findIndex(x=>x.id === obj_id), 1)
    }
  }