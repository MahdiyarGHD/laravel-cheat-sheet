<template>
    <div class="title">لیست مطالب</div>
    
    <div class="col-12 subject-container">
    
        <div @click="$parent.redirect('#artisan')" class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border"></span>
                <img class="subject-img" src="../assets/images/terminal.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="0" height="0" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> آرتیسان</div>
                    <div class="subject-desc">
                        آرتیسان یک رابط خط فرمان است که در لاراول استفاده شده است.
                    </div>
                </div>

            </div>
        </div>
        
        <div @click="$parent.redirect('#blade')"  class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border coding-png"></span>
                <img class="subject-img" src="../assets/images/coding.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> تمپلیت‌انجین</div>
                    <div class="subject-desc">
                    Blade یک تمپلیت انجین ساده و درعین حال قدرتمند است که در لاراول گنجانده شده است.
                    </div>
                </div>

            </div>
        </div>
        
        <div @click="$parent.redirect('#security')" class="subject-item">
        
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border security-img"></span>
                <img class="subject-img" src="../assets/images/database.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> دستورات امنیتی</div>
                    <div class="subject-desc">
                    لاراول قصد دارد پیاده سازی احراز هویت و رمزنگاری را بسیار ساده کند.
                    </div>
                </div>

            </div>
        </div>
        
        <div @click="$parent.redirect('#helpers')"  class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border helper-png"></span>
                <img class="subject-img" src="../assets/images/helpers.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> هلپر ها</div>
                    <div class="subject-desc">
                    لاراول شامل انواع مختلفی از توابع گلوبال «هلپر» PHP است.
                    </div>
                </div>

            </div>       
        </div>
        
        <div @click="$parent.redirect('#files')" class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border file-png"></span>
                <img class="subject-img" src="../assets/images/folder.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> کار با فایل‌ها</div>
                    <div class="subject-desc">
                   لاراول به لطف پکیج فوق العاده Flysystem یک سیستم مدیریت فایل قدرتمند ارائه می‌دهد.
                    </div>
                </div>

            </div>       
        </div>   
             
        <div @click="$parent.redirect('#auth')" class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border auth-png"></span>
                <img class="subject-img" src="../assets/images/auth.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> احرازهویت</div>
                    <div class="subject-desc">
                  لاراول در تلاش است تا ابزارهایی را که برای اجرای سریع، ایمن و آسان «احراز هویت» نیاز دارید در اختیار شما قرار دهد.
                    </div>
                </div>

            </div>       
        </div>
        
        <div @click="$parent.redirect('#request')" class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border requests-png"></span>
                <img class="subject-img" src="../assets/images/networking.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> Request کلاس</div>
                    <div class="subject-desc">
لاراول یک روش شئ‌گرا برای تعامل با «درخواست های HTTP» فعلی که توسط برنامه شما نیز مدیریت می‌شود ارائه می‌کند.
                    </div>
                </div>

            </div>       
        </div>     
             
        <div @click="$parent.redirect('#loop')" class="subject-item">
            <div class="col-9 subject-item-container">  
             
                <span class="subject-img-border loop-png"></span>
                <img class="subject-img" src="../assets/images/loop.png" alt="terminal">
                
                <div class="subject-texts-container">
                    <div class="subject-title"><svg class="subject-arrow" width="10" height="10" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_5)"><path d="M3 6L0 3L3 0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_5"><rect width="3" height="6" fill="white"/></clipPath></defs></svg> Loop متغیر</div>
                    <div class="subject-desc">
در حین تکرار در یک حلقه foreach ، یک متغیر loop$ در حلقه شما دردسترس خواهد بود .            
                </div>
                </div>

            </div>       
        </div>        
    </div>
</template>

<script>
export default {
    name: "Javscript"
}
</script>