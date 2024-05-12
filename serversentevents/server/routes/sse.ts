export default defineEventHandler(async (event) => {
    const eventStream = createEventStream(event)
    
    eventStream.push(`Message @ ${new Date().toLocaleTimeString()}`)
    
    eventStream.onClosed(async () => {
      await eventStream.close()
    })
    
    return eventStream.send()
  })