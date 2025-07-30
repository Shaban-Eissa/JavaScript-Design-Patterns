class TV {
  on() {
    console.log("TV is ON");
  }
  setInputChannel(channel) {
    console.log(`TV input set to ${channel}`);
  }
}

class SoundSystem {
  on() {
    console.log("Sound system ON");
  }
  setVolume(level) {
    console.log(`Volume set to ${level}`);
  }
}

class Lights {
  dim() {
    console.log("Lights dimmed");
  }
}

class StreamingService {
  connect() {
    console.log("Streaming service connected");
  }
}

class HomeTheaterFacade {
  constructor(tv, soundSystem, lights, streamingService) {
    this.tv = tv;
    this.soundSystem = soundSystem;
    this.lights = lights;
    this.streamingService = streamingService;
  }

  watchMovie() {
    console.log("Get ready to watch a movie...");
    this.lights.dim();
    this.tv.on();
    this.tv.setInputChannel("HDMI");
    this.soundSystem.on();
    this.soundSystem.setVolume(20);
    this.streamingService.connect();
    console.log("Movie is ready to play!");
  }

  endMovie() {
    console.log("Shutting down the theater...");
    console.log("Lights on, TV off, Sound off.");
  }
}

// Create subsystems
const tv = new TV();
const soundSystem = new SoundSystem();
const lights = new Lights();
const streaming = new StreamingService();

// Create Facade
const homeTheater = new HomeTheaterFacade(tv, soundSystem, lights, streaming);

// Client only calls one simple method
homeTheater.watchMovie();
