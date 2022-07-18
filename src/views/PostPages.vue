<template>
  <div class="wrapper">
    <div class="main">
      <div class="title">
        <img :src="require('@/assets/laptop.svg')" alt="" />
        <h3>Technology</h3>
      </div>
      <div class="content">
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
          </div>
          <div class="box_images">
            <div class="images">
              <img :src="require('@/assets/img1.svg')" alt="" />
            </div>
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="comment_main">
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Bessie Cooper</div>
                    <span>15 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Soo great!!!</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Theresa Webb</div>
                    <span>30 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Brosanova</div>
                    <span>40 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Kathryn Murphy</div>
                    <span>1 hour ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Great choice of Acronym AF1’s</p>
                  </div>
                </div>
              </div>
              <span class="view_all">View all 27 comments</span>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
          </div>
          <div class="box_images">
            <div class="images">
              <img :src="require('@/assets/img2.svg')" alt="" />
            </div>
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
            <div class="tag">
              #reels #instagramreels <br />
              #beautifuldestinations #earthfocus #earthbestshots #earthoffcial
              #earthpix #thegreatplanet <br />
              #discoverearth #fantastic_earth #awesome_earthpix #roamtheplanet
            </div>
          </div>
          <div class="box_images">
            <div class="file">
              <div class="file_item">
                <div class="file_item_name">
                  <img :src="require('@/assets/ppt.svg')" alt="" />
                  <span>Jerry-2020_I-9_Form.ppt</span>
                </div>
                <div class="file_item_size">
                  <span>19KB</span>
                  <img :src="require('@/assets/download.svg')" alt="" />
                </div>
              </div>
              <div class="file_item">
                <div class="file_item_name">
                  <img :src="require('@/assets/doc.svg')" alt="" />
                  <span>pdf-docusign.doc</span>
                </div>
                <div class="file_item_size">
                  <span>18MB</span>
                  <img :src="require('@/assets/download.svg')" alt="" />
                </div>
              </div>
              <div class="file_item">
                <div class="file_item_name">
                  <img :src="require('@/assets/xsl.svg')" alt="" />
                  <span>mine.xlsx</span>
                </div>
                <div class="file_item_size">
                  <span>1MB</span>
                  <img :src="require('@/assets/download.svg')" alt="" />
                </div>
              </div>
              <div class="file_item">
                <div class="file_item_name">
                  <img :src="require('@/assets/doc.svg')" alt="" />
                  <span>sharefile.doc</span>
                </div>
                <div class="file_item_size">
                  <span>25MB</span>
                  <img :src="require('@/assets/download.svg')" alt="" />
                </div>
              </div>
              <div class="file_item">
                <div class="file_item_name">
                  <img :src="require('@/assets/pdf.svg')" alt="" />
                  <span>formsi9.pdf</span>
                </div>
                <div class="file_item_size">
                  <span>10KB</span>
                  <img :src="require('@/assets/download.svg')" alt="" />
                </div>
              </div>
            </div>
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="comment_main">
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Bessie Cooper</div>
                    <span>15 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Soo great!!!</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Theresa Webb</div>
                    <span>30 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Brosanova</div>
                    <span>40 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Kathryn Murphy</div>
                    <span>1 hour ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Great choice of Acronym AF1’s</p>
                  </div>
                </div>
              </div>
              <span class="view_all">View all 27 comments</span>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
          </div>
          <div class="box_images">
            <div class="images">
              <img :src="require('@/assets/img3.svg')" alt="" />
            </div>
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
          </div>
          <div class="box_images">
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
        <BoxPostItem>
          <div class="header">
            <div class="user">
              <div class="avatar">
                <img :src="require('@/assets/avt1.svg')" alt="" />
              </div>
              <div class="info">
                <h4>Ralph Edwards</h4>
                <span>15 minutes ago</span>
              </div>
            </div>
            <div class="action">
              <img :src="require('@/assets/pen.svg')" alt="" />
              <img :src="require('@/assets/garbage.svg')" alt="" />
              <img :src="require('@/assets/bookmark.svg')" alt="" />
            </div>
          </div>
          <div class="content_box">
            <p>
              Search input is a must have of almost all apps. In this cheatsheet
              you can get inspiration on 6 variants of this component. <br />
              Which one is your favourite?
            </p>
            <span>View more</span>
          </div>
          <div class="box_images">
            <div class="images">
              <img :src="require('@/assets/img4.svg')" alt="" />
            </div>
            <div class="images_footer">
              <div class="reaction">
                <img :src="require('@/assets/happy.svg')" alt="" />
                <span>41 reactions</span>
              </div>
              <div class="cmt_count">
                <img :src="require('@/assets/comment.svg')" alt="" />
                <span>32 comments</span>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="comment_main">
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Bessie Cooper</div>
                    <span>15 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Soo great!!!</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Theresa Webb</div>
                    <span>30 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Brosanova</div>
                    <span>40 minutes ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Still doing this man</p>
                  </div>
                </div>
              </div>
              <div class="comment_item">
                <div class="comment_avt">
                  <img :src="require('@/assets/Avatar.svg')" alt="" />
                </div>
                <div class="comment_content">
                  <div class="comment_info">
                    <div class="name">Kathryn Murphy</div>
                    <span>1 hour ago</span>
                  </div>
                  <div class="comment_detail">
                    <p>Great choice of Acronym AF1’s</p>
                  </div>
                </div>
              </div>
              <span class="view_all">View all 27 comments</span>
            </div>
          </div>
          <div class="box_write_comment">
            <div class="box_write_comment_avt">
              <img :src="require('@/assets/Avatar.svg')" alt="" />
            </div>
            <div class="input">
              <label>
                <input type="search" placeholder="Search will seed post" />
                <button class="btn_add">Post</button>
              </label>
            </div>
          </div>
        </BoxPostItem>
      </div>
    </div>
  </div>
</template>

<script>
import BoxPostItem from "@/components/BoxPostItem.vue";
export default {
  components: {
    BoxPostItem,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.main {
  width: 635px;
  padding-left: 15px;
}
.title {
  padding: 26px 0px;
  width: 100%;
  display: flex;
  gap: 10px;
}
.title h3 {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
}
.header {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
}
.user {
  display: flex;
  gap: 13px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  justify-content: center;
}
.info span {
  padding: 0;
}
.avatar img {
  border-radius: 50%;
}
.action img {
  /* display: block;
	font-size: 12px; */
}
.action {
  padding-right: 10px;
  display: flex;
  align-items: center;
  gap: 21px;
}
.content_box {
  padding: 0 15px;
  padding-bottom: 10px;
}
.content_box p {
  font-size: 14px;
  line-height: 24px;
}
.content_box span,
.content_box .tag {
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: #0e489b;
}
.content_box .tag {
  margin-top: 20px;
}
.images {
  width: 100%;
  height: 100%;
}
.images img {
  width: 100%;
  height: 100%;
}
.images_footer {
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-around;
  border-bottom: 1px solid #d5d5d5;
  border-top: 1px solid #d5d5d5;
}
.reaction,
.cmt_count {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  font-weight: bold;
}
.comment_main {
  padding: 15px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.comment_item {
  display: flex;
  gap: 12px;
}
.comment_info {
  display: flex;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  align-items: center;
  gap: 6px;
}
.comment_info span {
  font-size: 12px;
  line-height: 18px;
  color: #767676;
}
.comment_detail p {
  font-size: 14px;
  line-height: 24px;
}
.view_all {
  color: #0e489b;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
}
.box_write_comment {
  display: flex;
  padding: 15px;
  justify-content: space-between;
}
.input label {
  display: flex;
  height: 40px;
  border-radius: 40px;
  background: #f0f0f0;
  justify-content: space-between;
  width: 540px;
  overflow: hidden;
  align-items: center;
  padding: 0 4px;
}
.input label input {
  height: 32px;
  padding: 8px 8px 8px 16px;
  border: none;
  width: calc(100% - 60px);
  outline: none;
  background: #f0f0f0;
}
.input label button {
  background: #007c7c;
  border-radius: 40px;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 4px 16px;
  height: 32px;
}
.box_write_comment_avt img {
  /* transform: scale(1.3); */
}
.file_item {
  padding: 15px;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
}
.file_item_name {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  line-height: 24px;
  color: #191919;
}
.file_item_size {
  display: flex;
  align-items: center;
  gap: 30px;
  color: #767676;
  font-size: 13px;
}
</style>
