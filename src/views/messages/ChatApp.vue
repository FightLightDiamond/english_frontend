<template>
  <div class="chat-app">
    <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage"/>
    <ContactsList :contacts="contacts" @selected="startConversationWith"/>
  </div>
</template>

<script>
  import FactoryService from '../../services/FactoryService'
  import Conversation from './Conversation'
  import ContactsList from './ContactsList'

  export default {
    data () {
      return {
        selectedContact: null,
        messages: [],
        contacts: [],
        user: JSON.parse(localStorage.getItem('user'))
      }
    },
    async mounted () {
      Echo.private(`messages.${this.user.id}`)
        .listen('.NewMessage', (e) => {
          this.handleIncoming(e.message)
        })

      const res = await FactoryService.request('ChatService').contacts()
      this.contacts = res.data
    },
    methods: {
      async startConversationWith (contact) {
        this.updateUnreadCount(contact, true)
        this.selectedContact = contact
        const res = await FactoryService.request('ChatService').conversation(contact.id)
        this.messages = res.data
      },
      saveNewMessage (message) {
        this.messages.push(message)
      },
      handleIncoming (message) {
        if (this.selectedContact && message.from == this.selectedContact.id) {
          this.saveNewMessage(message)
          return
        }
        this.updateUnreadCount(message.from_contact, false)
      },
      updateUnreadCount (contact, reset) {
        this.contacts = this.contacts.map((single) => {
          if (single.id !== contact.id) {
            return single
          }
          if (reset) {
            single.unread = 0
          } else {
            single.unread += 1
          }
          return single
        })
      }
    },
    components: { Conversation, ContactsList }
  }
</script>


<style lang="scss" scoped>
  .chat-app {
    display: flex;
  }
</style>
