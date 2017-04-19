package com.yc.zhihu.util;

import java.io.File;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

public class UploadFileUtil {

	private final static String uri="upload/img/";
	
	public static UploadFile uploadFile(HttpServletRequest request, MultipartFile file,
			String size) {
		
		String picRootName=uri;
		
		UploadFile pic = new UploadFile();

		File webappsFile = new File(request.getSession().getServletContext().getRealPath("/")).getParentFile();

		File picFile = new File(webappsFile, picRootName);

		String picBasePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
				+ "/" + picRootName;

		if (file.isEmpty()) {
			return null;
		}
		
		UploadFile uf = null;
		try {
			String originalFilename = file.getOriginalFilename();
			String newfilename = getUniqueFileName()
					+ originalFilename.substring(originalFilename.lastIndexOf("."));
			String saveDir = picFile.getAbsolutePath()+ "/"+ getNowDateStr();
			String newFilePath = saveDir + newfilename;
			String newFileUrl = picBasePath + getNowDateStr() + newfilename;

			File saveDirFile = new File(saveDir);

			if (!saveDirFile.exists()) {
				saveDirFile.mkdirs();
			}
			
			File imageFile = new File(newFilePath);
			

			uf = new UploadFile();
			uf.contentType = file.getContentType();
			uf.size = file.getSize();
			uf.originalFileName = originalFilename;
			uf.newFileName = newfilename;
			uf.newFilePath = newFilePath;
			uf.newFileUrl = newFileUrl;
			

			file.transferTo(imageFile);

		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return uf;
	}

	private static String getNowDateStr() {
		Calendar now = Calendar.getInstance();
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH) + 1;
		int day = now.get(Calendar.DATE);
		if(month<10){
			String m="0"+month;
			if(day<10){
				String d="0"+day;
				return year+m+d+"/";
			}
			return year+m+day+"/";
		}
		//return File.separator + year + File.separator + month + File.separator + day + File.separator;
		return year+month+day+"/";
	}

	private static String getUniqueFileName() {
		String str = UUID.randomUUID().toString();
		return str.replace("-", "");
	}

	public static class UploadFile {
		String originalFileName;
		String newFileName;
		String newFilePath;
		String newFileUrl;
		Long size;
		String contentType;

		public String getOriginalFileName() {
			return originalFileName;
		}

		public void setOriginalFileName(String originalFileName) {
			this.originalFileName = originalFileName;
		}

		public String getNewFileName() {
			return newFileName;
		}

		public void setNewFileName(String newFileName) {
			this.newFileName = newFileName;
		}

		public String getNewFilePath() {
			return newFilePath;
		}

		public void setNewFilePath(String newFilePath) {
			this.newFilePath = newFilePath;
		}

		public String getNewFileUrl() {
			return newFileUrl;
		}

		public void setNewFileUrl(String newFileUrl) {
			this.newFileUrl = newFileUrl;
		}

		public Long getSize() {
			return size;
		}

		public void setSize(Long size) {
			this.size = size;
		}

		public String getContentType() {
			return contentType;
		}

		public void setContentType(String contentType) {
			this.contentType = contentType;
		}

		@Override
		public String toString() {
			return "UploadFile [originalFileName=" + originalFileName + ", newFileName=" + newFileName
					+ ", newFilePath=" + newFilePath + ", newFileUrl=" + newFileUrl + ", size=" + size
					+ ", contentType=" + contentType + "]";
		}
		
		

	}

}
