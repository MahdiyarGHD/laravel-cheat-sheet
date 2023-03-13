<template>
     
        
        <div class="code-container">
          
        <div class="code-nav-btn">
        <div class="code-circle"></div>
        <div class="code-circle"></div>
        <div class="code-circle"></div>
        </div>
            <div class="code-bottom drac-custom-scrollbar">          
                <div class="code-holder">
                    
                </div>
                
                <div class="code">    
                <pre><code class="monocode">{{ this.code }}</code></pre>
                </div>
            </div>
            </div>
            
            
            
</template>

<script>
export default {
    name: 'Code',
    props: ['code'],

    methods: {
        calculateLines() {
        const codes = document.getElementsByClassName('monocode');

        Array.from(codes).forEach(element => {
            const result = element.innerHTML.split(/\n/);
            var lines = result.length 
            let html = '';
            for (var i = 1; i <= lines; i++) {
                html += i + '<br>'    
            }
            
            element.parentElement.parentElement.parentElement.getElementsByClassName('code-holder')[0].innerHTML = html;
        });
    },
      
  },
  
    mounted() {
        this.calculateLines()
    },
}
</script>
