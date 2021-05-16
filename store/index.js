export const state = () => ({
    list: [
        {
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
        },
        {
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
        },
        {
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
        },
   {
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
        },
    ]
})

export const mutations = {
    add(state, obj) {
      state.list.push({
        obj,
      })
    },
    addEmpty(state){
        state.list.push(
            {
                text:"",
                isChecked: false
            }
        )
    }
  }