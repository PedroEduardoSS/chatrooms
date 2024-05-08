const room = 'ROOM'
export default defineWebSocketHandler({
  open(peer) {
    console.log('opened WS', peer)
    peer.subscribe(room)
    peer.publish(room, 'Another user joined the chat')
  },
  close(peer) {
    console.log('closed WS', peer)
  },
  error(peer, error) {
    console.log('error on WS', peer, error)
  },
  message(peer, message) {
    console.log('message on WS', peer, message)
    peer.publish(room, message.text())
  }
})