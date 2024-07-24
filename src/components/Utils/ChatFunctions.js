const calculateNewMessages = (messages, lastChecked) => {
    const lastCheckedTime = new Date(lastChecked);
    return messages.filter(message => new Date(message.timestamp) > lastCheckedTime).length;
  };

export { calculateNewMessages };