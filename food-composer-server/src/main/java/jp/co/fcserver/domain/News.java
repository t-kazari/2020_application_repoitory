package jp.co.fcserver.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "t_news")
public class News implements Serializable {

}
