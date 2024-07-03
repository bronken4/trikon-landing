<template>
        <v-container class="mt-16 scroll-snap">
            <v-row>
                <v-col class="text-center">
                    <h2 class="text-h4">Egenskaper</h2>
                </v-col>
            </v-row>
            
            <v-row class="hidden-md-and-down">
                <v-col cols="4">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>With a extruder of....</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-down">
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>With a extruder of....</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="4">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-down">
                <v-col cols="4">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>With a extruder of....</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-up">
                <v-col cols="12" align="center">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>{{ info[0].title }}</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> {{ info[0].text }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-up">
                <v-col cols="12" align="center">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>{{ info[1].title }}</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> {{ info[1].text }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-up">
                <v-col cols="12" align="center">
                    <v-img
                    :aspect-ratio="1"
                    src="../assets/extruder.png"
                    width="300"
                    cover
                    class="y-img"
                ></v-img>
                </v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h3>{{ info[2].title }}</h3>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p> {{ info[2].text }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Egenskaper",

      info: [
        { title: "With a extruder of... 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta" },
        { title: "With a extruder of... 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta" },
        { title: "With a extruder of... 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam animi aut! Excepturi, autem voluptatum. Aspernatur velit suscipit sequi optio quam pariatur ut, expedita reiciendis labore, voluptatem mollitia inventore. Volupta" }
      ]
    };
  }
};
</script>

<style>
.y-img {
    border: 3px solid #FBC02D;
    border-radius: 8px;

}
</style>
